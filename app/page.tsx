import { Triangle } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { porarTableMetadata } from "@/lib/seo-config"
import { EmailForm } from "@/components/EmailForm"

export const metadata: Metadata = porarTableMetadata

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      <main className="max-w-2xl mx-auto text-left space-y-4 sm:space-y-6 flex-grow">
        <div className="flex ">
        <img
          src="/team.jpeg"
          alt="Porar Table Logo"
          
          style={{ width: "250px", height: "auto" }}
        />
        
        
        </div>

        <p className="text-base sm:text-lg leading-relaxed">hey,</p>
        <p className="text-base sm:text-lg leading-relaxed">what's up dude!</p>
        <p className="text-base sm:text-lg leading-relaxed">who told you about us? kuddus?</p>
        <p className="text-base sm:text-lg leading-relaxed">
          scince you’re here, let me tell you a bit about Porar Table and how we started.
        </p>
        <p className="text-base sm:text-lg leading-relaxed">
          So couple of months ago, we participated in a hackathon and we build a space where students can take notes, drag in resources, plan their study sessions, and collaborate live
          with friends or teachers. Think of it like a smart, infinite desk that built for learners, accessible from
          anywhere. it's like figJam but for studing.
        </p>

        <p className="text-base sm:text-lg leading-relaxed">
          We are calling it Porar Table.
        </p>
        <p className="text-base sm:text-lg leading-relaxed">
          with a goal of removing all the distraction while you are studing, whether you are alone or with your friends. 
        </p>
        <p className="text-base sm:text-lg leading-relaxed">
          and guess what? we stood third place in that hackathon! which gave us enough motivation to keep building it.
        </p>
        
        <p className="text-base sm:text-lg leading-relaxed">
          We’re kicking things off with a 100-day reel challenge starting soon — sharing our progress, feature
          drops, and behind-the-scenes stories. you can watch it here,
        </p>
        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-base sm:text-lg leading-relaxed">
          <li>
            <Link href="https://www.linkedin.com/company/porartablehq" className="underline" target="_blank">
              LinkedIn
            </Link>
            
          </li>
          <li>
            <Link href="https://x.com/PorarTableHQ" className="underline" target="_blank">
              Twitter (X)
            </Link>
            
          </li>
          <li>
            <Link href="https://www.instagram.com/porartablehq" className="underline" target="_blank">
              Instagram
            </Link>
            
          </li>
          <li>
            <Link href="https://www.facebook.com/PorarTableHQ" className="underline" target="_blank">
              Facebook
            </Link>
            
          </li>
          <li>
            <Link href="https://youtube.com/@porartablehq" className="underline" target="_blank">
              YouTube
            </Link>
            
          </li>
          <li>
            <Link href="https://www.tiktok.com/@porartablehq" className="underline" target="_blank">
              TikTok
            </Link>
            
          </li>
        </ul>
        <p className="text-base sm:text-lg leading-relaxed">
          This isn’t a big, flashy launch. It’s more like:
          <br />
          “Hey, here’s what we’ve been building. What do you think?”
        </p>

        <p className="text-base sm:text-lg leading-relaxed">Here’s what Porar Table is all about:</p>
        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-base sm:text-lg leading-relaxed">
          <li>A live, infinite canvas built for students — take notes, brainstorm ideas, and stay organized</li>
          <li>Real-time collaboration with friends and teachers — like Figma, but for studying</li>
          <li>Shareable study links — so anyone can instantly view or edit your notes</li>
          <li>Early access — and we’re actively listening to real users to shape what comes next</li>
        </ul>

        <p className="text-base sm:text-lg leading-relaxed pt-2 sm:pt-4">We Can join our Community here,</p>
        
        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-base sm:text-lg leading-relaxed">
          <li>
            <Link href="https://discord.gg/Ms5CxzebjT" className="underline" target="_blank">
              Discord
            </Link>
            
          </li>
          <li>
            <Link href="https://www.reddit.com/r/PorarTable/" className="underline" target="_blank">
              Reddit
            </Link>
            
          </li>
          <li>
            <Link href="https://www.pinterest.com/PorarTableHQ" className="underline" target="_blank">
              also Pinterest cause why not
            </Link>
            
          </li>
        </ul>

        
        <div className="mt-8">
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            If you want to be the first to know when we launch, drop your email below:
          </p>
          <EmailForm />
        </div>

      <p className="text-base sm:text-lg leading-relaxed pt-4">See you at your porar table haha,</p>
      <p className="text-base sm:text-lg leading-relaxed">Salman, Sajid, Shagato & Towsif</p>
      </main>
      <Footer />
    </div>
  )
}
