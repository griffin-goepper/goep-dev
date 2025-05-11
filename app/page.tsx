import Hero from "@/components/hero"
import FeaturedProjects from "@/components/featured-projects"
import LatestPosts from "@/components/latest-posts"
import Skills from "@/components/skills"
import CallToAction from "@/components/call-to-action"

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <Hero />
      <FeaturedProjects />
      <Skills />
      {/* <LatestPosts /> */}
      <CallToAction />
    </div>
  )
}
