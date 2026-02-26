import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex flex-col items-center mb-10">
          <div className="w-32 h-32 mb-10">
            <Image src="/HyperBit_Dark_Logo.svg" alt="HyperBit Logo" width={128} height={128} priority />
          </div>
          <h1 className="text-3xl font-medium text-center">AS208437 - HyperBit SRLs</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <InfoCard
              title="BGP Info"
              description="Check out the page of our AS on the BGP.tools portal"
              href="https://bgp.tools/AS208437"
            />

            <InfoCard
              title="Contacts"
              description="Contact me if you want information about peering or to report a problem"
              href="https://hyperbit.it/net"
            />

            <InfoCard 
              title="Peering Policy" 
              description="Our peering policy"
              href="/peering-policy"
            />

            <div className="grid grid-cols-2 gap-4 mt-4">
              <Button variant="default" className="w-full" asChild>
                <Link href="https://rpki.net.hb-bkbn.net">RPKI Validator</Link>
              </Button>
              <Button variant="default" className="w-full" asChild>
                <Link href="https://status.as208437.net">Network Status</Link>
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-medium mb-2">Prefixes</h2>
            <p className="text-[#757575] mb-6">This page lists all prefixes announced by this AS</p>

            <div className="space-y-4">
              <PrefixCard prefix="151.242.0.0/24" description="Hyperbit SRLs - Server IPv4" />
              <PrefixCard prefix="140.233.176.0/24" description="Hyperbit SRLs - DSL IPv4" />
              <PrefixCard prefix="2a14:7586:f000::/40" description="Hyperbit SRLs - Server IPv6" />
              <PrefixCard prefix="2a14:7586:f100::/40" description="Hyperbit SRLs - DSL IPv6" />
              <PrefixCard prefix="2a14:7586:ff00::/40" description="Hyperbit SRLs - Backbone IPv6" />
              <PrefixCard prefix="2a0d:b287:dad0::/44" description="Hyperbit SRLs - General IPv6" />
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-[#757575]">HyperBit SRLs © {new Date().getFullYear()}</p>
        </div>
      </main>
    </div>
  )
}

function InfoCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link href={href} className="block">
      <div className="border rounded-lg p-6 hover:bg-[#f5f5f5] transition-colors cursor-pointer">
        <div className="flex items-start gap-4">
          <div className="mt-1">
            <ServerIcon />
          </div>
          <div>
            <h3 className="text-xl font-medium mb-1">{title}</h3>
            {description && <p className="text-[#757575]">{description}</p>}
          </div>
        </div>
      </div>
    </Link>
  )
}

function PrefixCard({ prefix, description }: { prefix: string, description: string }) {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center gap-3">
        <ServerIcon />
        <div>
          <h3 className="text-lg font-medium font-mono">{prefix}</h3>
          <p className="text-[#757575]">{description}</p>
        </div>
      </div>
    </div>
  )
}

function ServerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="20" height="6" rx="1" stroke="black" strokeWidth="2" />
      <rect x="2" y="14" width="20" height="6" rx="1" stroke="black" strokeWidth="2" />
      <path d="M6 7H6.01" stroke="black" strokeWidth="2" strokeLinecap="round" />
      <path d="M6 17H6.01" stroke="black" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
