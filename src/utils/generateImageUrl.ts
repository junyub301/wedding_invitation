function generateImageUrl({
  filename,
  format,
  option = 'q_auto,c_fill',
}: {
  filename: string
  format: 'jpg' | 'webp'
  option?: string
}) {
  return `https://res.cloudinary.com/dtbq59vdd/image/upload/${option}/v1711022433/${format}/${filename}.${format}`
}

export default generateImageUrl
