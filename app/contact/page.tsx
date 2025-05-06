"use client";

import { useState, useRef } from "react";
import Turnstile from "react-turnstile";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const turnstileToken = useRef<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");
  
    const formData = new FormData(e.currentTarget);
    const token = turnstileToken.current;
  
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
        token,
      }),
      headers: { "Content-Type": "application/json" },
    });
  
    if (res.ok) {
      setFormState("success");
    } else {
      setFormState("error");
    }
  };
  

  return (
    <div className="container max-w-5xl py-12 md:py-24">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info Section */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Email</h2>
              <a href="mailto:griffin@goep.dev" className="text-muted-foreground hover:text-foreground flex items-center gap-2">
                <Mail className="h-4 w-4" />
                griffin@goep.dev
              </a>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Connect</h2>
              <div className="flex gap-4">
                <Link href="https://github.com/griffin-goepper" target="_blank" className="hover:text-foreground text-muted-foreground">
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/griffin-g-066668171/"
                  target="_blank"
                  className="hover:text-foreground text-muted-foreground"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Location</h2>
              <p className="text-muted-foreground">Based in Cincinnati, OH</p>
              <p className="text-muted-foreground">Available for remote work worldwide</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" placeholder="What's this about?" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Your message..." className="min-h-[120px]" required />
              </div>

              {/* Turnstile Widget */}
              <Turnstile
                sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                onSuccess={(token) => (turnstileToken.current = token)}
                className="my-4"
              />

              <Button type="submit" className="w-full" disabled={formState !== "idle"}>
                {formState === "idle" && (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
                {formState === "submitting" && "Sending..."}
                {formState === "success" && "Message Sent!"}
                {formState === "error" && "Error - Try Again"}
              </Button>

              {formState === "success" && (
                <p className="text-sm text-green-600 dark:text-green-400 text-center mt-2">
                  Thanks for reaching out! I'll get back to you soon.
                </p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
