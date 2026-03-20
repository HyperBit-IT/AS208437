export const infoCards = [
  {
    title: 'BGP Info',
    description: 'Check out the page of our AS on the BGP.tools portal.',
    href: 'https://bgp.tools/AS208437',
    external: true
  },
  {
    title: 'Contacts',
    description: 'Contact us for peering information or to report a network issue.',
    href: 'https://hyperbit.it/net',
    external: true
  },
  {
    title: 'Peering Policy',
    description: 'Read our current peering policy and operating terms.',
    href: '/peering-policy',
    external: false
  }
] as const;

export const quickLinks = [
  {
    label: 'RPKI Validator',
    href: 'https://rpki.net.hb-bkbn.net'
  },
  {
    label: 'Network Status',
    href: 'https://status.as208437.net'
  }
] as const;

export const prefixes = [
  {
    prefix: '151.242.0.0/24',
    description: 'HyperBit SRLs - Server IPv4'
  },
  {
    prefix: '140.233.176.0/24',
    description: 'HyperBit SRLs - DSL IPv4'
  },
  {
    prefix: '2a14:7586:f000::/40',
    description: 'HyperBit SRLs - Server IPv6'
  },
  {
    prefix: '2a14:7586:f100::/40',
    description: 'HyperBit SRLs - DSL IPv6'
  },
  {
    prefix: '2a14:7586:ff00::/40',
    description: 'HyperBit SRLs - Backbone IPv6'
  },
  {
    prefix: '2a0d:b287:dad0::/44',
    description: 'HyperBit SRLs - General IPv6'
  }
] as const;

export const policyItems = [
  'We actively participate in Route Server peering at all IXPs where we are present.',
  'We strongly recommend establishing peering through the Route Server whenever possible.'
] as const;

export const reservedRights = [
  'We may update our policy and technical requirements at any time.',
  'We reserve the right to accept or decline any peering request at our discretion.',
  'We may terminate any peering arrangement without prior notice if operationally required.'
] as const;

export const currentYear = new Date().getFullYear();
