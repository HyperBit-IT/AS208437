export const networkInfo = {
  asn: 'AS208437',
  asnNumber: 208437,
  name: 'HyperBit SRLs',
  peeringPolicy: 'Open',
  peeringDbUrl: 'https://www.peeringdb.com/asn/208437',
  ripeStatUrl: 'https://stat.ripe.net/AS208437',
  bgpToolsUrl: 'https://bgp.tools/AS208437',
  rpkiValidatorUrl: 'https://rpki.net.hb-bkbn.net',
  statusUrl: 'https://status.as208437.net'
} as const;

// Single source of truth for the peering numbers shown across the page.
export const peering = {
  ix: 'MINAP Milano',
  peerCountLabel: '110+',
  upcomingIxes: ['PCIX', 'VSIX','STIX', 'NINE-IX']
} as const;

export const transit = {
  upstreamCount: 3,
  maxCapacityLabel: '40G'
} as const;

export const monitoring = {
  coverageLabel: '24/7'
} as const;

export interface Upstream {
  asn: string;
  name: string;
  role: string;
}

export const upstreams: Upstream[] = [
  {
    asn: 'AS9002',
    name: 'RETN',
    role: 'Transit IP + DDoS'
  },
  {
    asn: 'AS41720',
    name: 'Navigabene',
    role: 'Backup IP Transit'
  },
  {
    asn: 'AS6939',
    name: 'Hurricane Electric',
    role: 'IPv6 IP Transit'
  }
];

export const technicalHighlights = [
  'RPKI Origin Validation — active by default',
  'DDoS protection active on the full AS208437 cone',
  'Multi-upstream redundancy across three independent providers',
  'Native dual-stack IPv4 / IPv6 on every announced prefix',
  `Network status published continuously at ${networkInfo.statusUrl}`
] as const;

export interface Prefix {
  prefix: string;
  description: string;
  family: 'IPv4' | 'IPv6';
}

export const prefixes: Prefix[] = [
  {
    prefix: '151.242.0.0/24',
    description: 'HyperBit SRLs — Server IPv4',
    family: 'IPv4'
  },
  {
    prefix: '140.233.176.0/24',
    description: 'HyperBit SRLs — Bolzano/Bozen DSL IPv4',
    family: 'IPv4'
  },
  {
    prefix: '94.158.185.0/24',
    description: 'HyperBit SRLs — Trento DSL IPv4',
    family: 'IPv4'
  },
  {
    prefix: '2a14:7586:f000::/40',
    description: 'HyperBit SRLs — Server IPv6',
    family: 'IPv6'
  },
  {
    prefix: '2a14:7586:f100::/40',
    description: 'HyperBit SRLs — Bolzano/Bozen DSL IPv6',
    family: 'IPv6'
  },
  {
    prefix: '2a14:7586:f200::/40',
    description: 'HyperBit SRLs — Trento DSL IPv6',
    family: 'IPv6'
  },
  {
    prefix: '2a14:7586:ff00::/40',
    description: 'HyperBit SRLs — Backbone IPv6',
    family: 'IPv6'
  },
  {
    prefix: '2a0d:b287:dad0::/44',
    description: 'HyperBit SRLs — General IPv6',
    family: 'IPv6'
  }
];

export const policyItems = [
  'We actively participate in Route Server peering at all IXPs where we are present.',
  'We strongly recommend establishing peering connections through the Route Server.'
] as const;

export const reservedRights = [
  'We maintain the right to modify our policy and requirements at any time.',
  'We reserve the right to accept or decline any peering request at our discretion.',
  'We retain the right to terminate any peering arrangement without prior notice.'
] as const;

export const currentYear = new Date().getFullYear();
