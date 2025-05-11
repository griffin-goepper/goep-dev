"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Code, Mail, MessageSquare, Rocket, Search, Settings, Smartphone, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  const [persona, setPersona] = useState<"recruiter" | "business">("business")

  return (
    <div className="container py-12 md:py-24">
      <div className="max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Services</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Tailored solutions for different needs. Select your path below.
        </p>

        <div className="bg-muted p-1 rounded-lg inline-flex mb-8">
          <Button
            variant={persona === "business" ? "default" : "ghost"}
            className="rounded-md"
            onClick={() => setPersona("business")}
          >
            Business Owner
          </Button>
          <Button
            variant={persona === "recruiter" ? "default" : "ghost"}
            className="rounded-md"
            onClick={() => setPersona("recruiter")}
          >
            Hiring Manager / Recruiter
          </Button>
        </div>

        {persona === "recruiter" ? <RecruiterView /> : <BusinessOwnerView />}
      </div>
    </div>
  )
}

function RecruiterView() {
  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <section>
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Looking for a Tech Professional?</h2>
          <p className="text-xl text-muted-foreground">
            I bring a versatile skill set and proven track record to help your team succeed.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Technical Expertise</CardTitle>
            <CardDescription>A diverse toolkit for modern development challenges</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {[
                "JavaScript",
                "AWS",
                "Python",
                "R",
                "Bash",
                "Vue.JS",
                "React",
                "Git",
                "CI/CD",
                "Microservices",
                "Cybersecurity",
                "GDPR",
              ].map((skill) => (
                <Badge key={skill} variant="secondary" className="justify-center py-1.5">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* <section>
        <h2 className="text-2xl font-bold tracking-tight mb-6">Key Accomplishments</h2>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>Cloud Infrastructure Optimization</CardTitle>
                  <CardDescription>Enterprise SaaS Platform</CardDescription>
                </div>
                <Badge>AWS</Badge>
              </div>
            </CardHeader>
            <CardContent>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>Frontend Modernization</CardTitle>
                  <CardDescription>Customer Facing Platforms</CardDescription>
                </div>
                <Badge>Vue.js</Badge>
              </div>
            </CardHeader>
            <CardContent>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>Security Compliance Initiative</CardTitle>
                  <CardDescription>Financial Services Client</CardDescription>
                </div>
                <Badge>Cybersecurity</Badge>
              </div>
            </CardHeader>
            <CardContent>
            </CardContent>
          </Card>
        </div>
      </section> */}

      <section>
        <h2 className="text-2xl font-bold tracking-tight mb-6">Professional Approach</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Rocket className="h-5 w-5 mr-2 text-primary" />
                Agile Practitioner
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Certified Scrum Master with experience leading agile teams through complex product development cycles.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                Clear Communicator
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Skilled at translating complex technical concepts into clear language for diverse stakeholders.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Settings className="h-5 w-5 mr-2 text-primary" />
                Problem Solver
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Analytical thinker who thrives on finding elegant solutions to challenging technical problems.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold tracking-tight mb-4">Ready to discuss opportunities?</h2>
        <p className="text-muted-foreground mb-6">
          I would love to learn about your team.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </section>
    </div>
  )
}

function BusinessOwnerView() {
  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <section>
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Digital Solutions for Your Business</h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive services to establish and enhance your online presence.
          </p>
        </div>

        <Tabs defaultValue="websites" className="w-full">
            <TabsList className="flex overflow-x-auto md:grid md:grid-cols-4 gap-2 mb-8">
                <TabsTrigger value="websites" className="flex-shrink-0">Websites</TabsTrigger>
                <TabsTrigger value="social" className="flex-shrink-0">Social & Email</TabsTrigger>
                <TabsTrigger value="seo" className="flex-shrink-0">Local SEO</TabsTrigger>
                <TabsTrigger value="management" className="flex-shrink-0">Management</TabsTrigger>
            </TabsList>


          <TabsContent value="websites" className="space-y-6">
            <Card>
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="relative aspect-video md:aspect-auto md:col-span-1">
                  <Image
                    src="/modern-responsive-website.png"
                    alt="Modern website design"
                    fill
                    className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                  />
                </div>
                <div className="p-6 md:col-span-2">
                  <h3 className="text-2xl font-bold mb-2">Custom Website Design</h3>
                  <p className="text-muted-foreground mb-4">
                    Stand out from the competition with a professionally designed website that reflects your brand and
                    converts visitors into customers.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <p>Modern, responsive design that looks great on all devices</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <p>SEO-optimized structure to help customers find you</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <p>Fast loading speeds and secure hosting</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <p>Content management system for easy updates</p>
                    </div>
                  </div>
                </div>
              </div>
              <CardFooter className="bg-muted/50 px-6 py-4">
                <p className="text-sm">Starting at $1,500 • 3-4 weeks delivery</p>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="social" className="space-y-6">
            <Card>
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="relative aspect-video md:aspect-auto md:col-span-1">
                  <Image
                    src="/social-media-campaign.png"
                    alt="Social media marketing"
                    fill
                    className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                  />
                </div>
                <div className="p-6 md:col-span-2">
                  <h3 className="text-2xl font-bold mb-2">Social Media & Email Setup</h3>
                  <p className="text-muted-foreground mb-4">
                    Establish a professional online presence across platforms and connect with your audience
                    effectively.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <p>Professional email setup with Google Workspace</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <p>Social media profile creation and optimization (Facebook, Instagram, Twitter, TikTok)</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <p>Ad campaign setup and management</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <p>Content calendar and posting strategy</p>
                    </div>
                  </div>
                </div>
              </div>
              <CardFooter className="bg-muted/50 px-6 py-4">
                <p className="text-sm">Starting at $1,200 • Ongoing management available</p>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="seo" className="space-y-6">
            <Card>
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="relative aspect-video md:aspect-auto md:col-span-1">
                  <Image
                    src="/seo.png"
                    alt="Local SEO"
                    fill
                    className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                  />
                </div>
                <div className="p-6 md:col-span-2">
                  <h3 className="text-2xl font-bold mb-2">Local SEO & Google Business</h3>
                  <p className="text-muted-foreground mb-4">
                    Help local customers find your business when they're searching for products or services you offer.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <p>Google Business Profile setup and optimization</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <p>Local keyword research and implementation</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <p>Local business directory listings</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <p>Review management strategy</p>
                    </div>
                  </div>
                </div>
              </div>
              <CardFooter className="bg-muted/50 px-6 py-4">
                <p className="text-sm">Starting at $400 • Results typically within 2-3 months</p>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="management" className="space-y-6">
            <Card>
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="relative aspect-video md:aspect-auto md:col-span-1">
                  <Image
                    src="/website-management-analytics-dashboard.png"
                    alt="Website management"
                    fill
                    className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                  />
                </div>
                <div className="p-6 md:col-span-2">
                  <h3 className="text-2xl font-bold mb-2">Ongoing Management</h3>
                  <p className="text-muted-foreground mb-4">
                    Keep your digital presence running smoothly with professional maintenance and support.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <p>Website hosting and security management</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <p>Regular content updates and site improvements</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <p>Performance monitoring and analytics reporting</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <p>Technical support and troubleshooting</p>
                    </div>
                  </div>
                </div>
              </div>
              <CardFooter className="bg-muted/50 px-6 py-4">
                <p className="text-sm">Starting at $150/month • Cancel anytime</p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section>
        <h2 className="text-2xl font-bold tracking-tight mb-6">Why Work With Me?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Code className="h-5 w-5 mr-2 text-primary" />
                Technical Expertise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Professional developer with years of experience building high-quality websites and digital solutions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Star className="h-5 w-5 mr-2 text-primary" />
                Results-Focused
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I measure success by the results you achieve—more customers, better engagement, and increased revenue.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Smartphone className="h-5 w-5 mr-2 text-primary" />
                Modern Approach
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Stay ahead with cutting-edge technology and design that keeps your business competitive.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-muted p-8 rounded-lg">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold tracking-tight mb-2">Ready to grow your business?</h2>
          <p className="text-muted-foreground">
            Let's discuss how I can help you establish a strong online presence and attract more customers.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">
              <Search className="mr-2 h-4 w-4" />
              Browse My Work
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
