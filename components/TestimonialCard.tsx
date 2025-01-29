import { Card, CardContent } from "./ui/card"


interface TestimonialCardProps {
  quote: string
  author: string
}

export function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <Card className="bg-zinc-800 border-zinc-700">
      <CardContent className="p-6">
        <blockquote className="text-lg text-zinc-300 italic mb-4">{quote}</blockquote>
        <p className="text-sm text-zinc-400">- {author}</p>
      </CardContent>
    </Card>
  )
}

