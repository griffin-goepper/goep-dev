"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [isTyping, setIsTyping] = useState(true)
  const [displayText, setDisplayText] = useState("")
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(70)

  const baseText = "Hi, I'm Griffin. I make things that people enjoy using."

  // Add additional sentences here
  const additionalSentences = [
    "I design intuitive user interfaces.",
    "I build performant web applications.",
    "I enjoy cars.",
    "I'm passionate about clean, minimal design.",
  ]

  const typingRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!isTyping) {
      setDisplayText(baseText)
      return
    }

    const handleTyping = () => {
      // Always keep the base text
      const currentText = baseText

      // If we're past the initial sentence
      if (currentSentenceIndex > 0) {
        const currentAdditionalSentence = additionalSentences[currentSentenceIndex - 1]

        if (isDeleting) {
          // Deleting the additional sentence
          const newText = currentAdditionalSentence.substring(0, displayText.length - baseText.length - 1)
          setDisplayText(baseText + newText)
          setTypingSpeed(30) // Faster when deleting

          if (newText.length === 0) {
            setIsDeleting(false)
            setCurrentSentenceIndex((currentSentenceIndex + 1) % (additionalSentences.length + 1))
            setTypingSpeed(1000) // Pause before typing next sentence
          }
        } else {
          // Typing the additional sentence
          const newText = currentAdditionalSentence.substring(0, displayText.length - baseText.length + 1)
          setDisplayText(baseText + newText)
          setTypingSpeed(70) // Normal typing speed

          if (newText.length === currentAdditionalSentence.length) {
            setIsDeleting(true)
            setTypingSpeed(1500) // Pause before deleting
          }
        }
      } else {
        // Initial typing of the base sentence
        setDisplayText(baseText.substring(0, displayText.length + 1))

        if (displayText.length === baseText.length - 1) {
          setCurrentSentenceIndex(1)
          setTypingSpeed(1500) // Pause before typing additional sentence
        }
      }
    }

    typingRef.current = setTimeout(handleTyping, typingSpeed)

    return () => {
      if (typingRef.current) clearTimeout(typingRef.current)
    }
  }, [isTyping, displayText, currentSentenceIndex, isDeleting, baseText, typingSpeed])

  const handleSkip = () => {
    setIsTyping(false)
    if (typingRef.current) clearTimeout(typingRef.current)
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          {isTyping ? (
            <span className="inline-flex">
              <span>{displayText}</span>
              <span className="border-r-2 border-primary animate-blink">&nbsp;</span>
            </span>
          ) : (
            <span>{baseText}</span>
          )}
        </h1>

        {isTyping && (
          <Button variant="ghost" onClick={handleSkip} className="text-muted-foreground hover:text-foreground">
            Get on with it
          </Button>
        )}

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          I'm a developer and UI designer with a passion for creating beautiful, functional experiences that people love
          to use.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/projects">Explore My Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/quick-thoughts">Quick Thoughts</Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
