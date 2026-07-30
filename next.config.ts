
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'media.collegesathi.com' },
      { protocol: 'https', hostname: 'www.collegesathi.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
     domains:["images.unsplash.com"]
  },
}

export default nextConfig
