import { Triangle } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { porarTableMetadata } from "@/lib/seo-config"

export const metadata: Metadata = porarTableMetadata

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      <main className="max-w-2xl mx-auto text-left space-y-4 sm:space-y-6 flex-grow">
        <div className="flex justify-start mb-8">
          <Triangle className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
        </div>

        <p className="text-base sm:text-lg leading-relaxed">Hi.</p>
        <p className="text-base sm:text-lg leading-relaxed">Glad to see you here.</p>

        <p className="text-base sm:text-lg leading-relaxed">
          We’re building Porar Table — a digital study table, right inside your browser.
        </p>
        <p className="text-base sm:text-lg leading-relaxed">
          It’s a space where students can take notes, drag in resources, plan their study sessions, and collaborate live
          with friends or teachers. Think of it like a smart, infinite desk that built for learners, accessible from
          anywhere.
        </p>
        <p className="text-base sm:text-lg leading-relaxed">
          No installs. No distractions. Just open and start learning.
        </p>
        <p className="text-base sm:text-lg leading-relaxed">
          We’re kicking things off with a 100-day reel challenge starting launch day — sharing our progress, feature
          drops, and behind-the-scenes stories.
        </p>
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

        <p className="text-base sm:text-lg leading-relaxed pt-2 sm:pt-4">Stay connected with us (Socials)</p>
        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-base sm:text-lg leading-relaxed">
          <li>
            <Link href="https://www.linkedin.com/company/porartablehq" className="underline" target="_blank">
              LinkedIn
            </Link>
            : https://www.linkedin.com/company/porartablehq
          </li>
          <li>
            <Link href="https://x.com/PorarTableHQ" className="underline" target="_blank">
              Twitter (X)
            </Link>
            : https://x.com/PorarTableHQ
          </li>
          <li>
            <Link href="https://www.instagram.com/porartablehq" className="underline" target="_blank">
              Instagram
            </Link>
            : https://www.instagram.com/porartablehq
          </li>
          <li>
            <Link href="https://www.facebook.com/PorarTableHQ" className="underline" target="_blank">
              Facebook
            </Link>
            : https://www.facebook.com/PorarTableHQ
          </li>
          <li>
            <Link href="https://youtube.com/@porartablehq" className="underline" target="_blank">
              YouTube
            </Link>
            : https://youtube.com/@porartablehq
          </li>
          <li>
            <Link href="https://www.tiktok.com/@porartablehq" className="underline" target="_blank">
              TikTok
            </Link>
            : https://www.tiktok.com/@porartablehq
          </li>
          <li>
            <Link href="https://www.pinterest.com/PorarTableHQ" className="underline" target="_blank">
              Pinterest
            </Link>
            : https://www.pinterest.com/PorarTableHQ
          </li>
          <li>
            <Link href="https://discord.gg/Ms5CxzebjT" className="underline" target="_blank">
              Discord
            </Link>
            : https://discord.gg/Ms5CxzebjT
          </li>
          <li>
            <Link href="https://www.reddit.com/r/PorarTable/" className="underline" target="_blank">
              Reddit
            </Link>
            : https://www.reddit.com/r/PorarTable/
          </li>
        </ul>

        <p className="text-base sm:text-lg leading-relaxed pt-2 sm:pt-4">How people actually use Porar Table</p>
        <p className="text-base sm:text-lg leading-relaxed">
          <strong className="font-bold">Use Case 1: Night-before-exam panic</strong>
          <br />
          “Bro, it’s 2 AM. Please send me your Porar Table notes. I swear I’ll actually study this time.”
        </p>
        <p className="text-base sm:text-lg leading-relaxed">
          <strong className="font-bold">Use Case 2: Teachers going full digital</strong>
          <br />
          “This is today’s class material. I’ve already shared it in the Porar Table group. Don’t say I didn’t.”
        </p>
        <p className="text-base sm:text-lg leading-relaxed">
          <strong className="font-bold">Use Case 3: Friend saves your GPA</strong>
          <br />
          “Dude, I don’t get this chapter at all.”
          <br />
          “No stress. I’ve got full notes on Porar Table. Sending now. You owe me.”
        </p>

        <p className="text-base sm:text-lg leading-relaxed pt-4">See you inside.</p>
        <p className="text-base sm:text-lg leading-relaxed">Salman, Sajid, Shagato & Towsif</p>
      </main>
      <Footer />
    </div>
  )
}
