"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { SOCIAL_LINKS } from "@/lib/portfolio-data"
import type { SocialIcon } from "@/lib/portfolio-types"
import type { LucideIcon } from "lucide-react"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

const SOCIAL_ICON_MAP: Record<SocialIcon, LucideIcon> = {
  Github,
  Linkedin,
  Twitter,
  Mail,
}

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border/40 bg-secondary/10 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left copy */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Get in touch
            </h2>
            <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
              Based in Caracas, Venezuela. Open to remote opportunities across
              LATAM, the US, and Europe. Interested in working together or have
              a question? Drop me a message.
            </p>

            <div className="mt-10">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Find me on
              </h3>
              <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = SOCIAL_ICON_MAP[social.icon]
                  return (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <Icon className="size-4" />
                      {social.label}
                    </a>
                  </Button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="rounded-2xl border border-border/40 bg-card p-6 lg:p-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-semibold text-foreground">
                Send a message
              </h3>
              <Badge variant="secondary" className="text-[11px]">
                Form wiring coming soon
              </Badge>
            </div>
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <Input
                    id="contact-name"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="contact-message"
                  placeholder="Tell me about your project or question..."
                  rows={5}
                />
              </div>
              <Button type="submit" className="w-full gap-2 sm:w-auto">
                <Mail className="size-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
