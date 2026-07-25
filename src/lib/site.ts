import { networkInfo } from '$lib/data/network';

export const resourceLinks = [
  {
    label: 'Network Status',
    href: networkInfo.statusUrl
  },
  {
    label: 'RPKI Validator',
    href: networkInfo.rpkiValidatorUrl
  },
  {
    label: 'PeeringDB',
    href: networkInfo.peeringDbUrl
  },
  {
    label: 'RIPEstat',
    href: networkInfo.ripeStatUrl
  },
  {
    label: 'BGP.tools',
    href: networkInfo.bgpToolsUrl
  }
] as const;
