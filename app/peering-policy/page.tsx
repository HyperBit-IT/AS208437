import Image from "next/image"
import { Link as LucideLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PeeringPolicy() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex flex-col items-center mb-10">
          <div className="w-32 h-32 mb-10">
            <Image src="/HyperBit_Dark_Logo.svg" alt="HyperBit Logo" width={128} height={128} priority />
          </div>
          <h1 className="text-3xl font-medium text-center">AS208437 - HyperBit SRLs</h1>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg">
            <p className="text-center text-lg mb-8">
              AS208437 maintains an open peering policy, establishing connections with networks that share our presence at mutual exchange
            </p>

            <h2 className="text-2xl font-semibold mb-4">Peering Policy</h2>
            
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>We actively participate in Route Server peering at all IXPs where we are present. We strongly recommend establishing peering connections through the Route Server.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Reserved Rights</h2>
            
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>We maintain the right to modify our policy and requirements at any time.</li>
              <li>We reserve the right to accept or decline any peering request at our discretion.</li>
              <li>We retain the right to terminate any peering arrangement without prior notice.</li>
            </ul>

            <p className="text-center text-lg">
              For peering inquiries, please contact <a className="text-blue-500 hover:underline" href="mailto:noc@hyperbit.it">noc@hyperbit.it</a>.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-[#757575]">HyperBit SRLs © {new Date().getFullYear()}</p>
        </div>
      </main>
    </div>
  )
}