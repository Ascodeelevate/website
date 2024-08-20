import Image from 'next/image'

interface OptimizedImageProps {
    src: string
    alt: string
    className?: string
    width: number
    height: number
}
export  function OptimizedImage({ src, alt, className, width, height}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
    //   layout="responsive"
      loading="lazy"
    />
  )
}