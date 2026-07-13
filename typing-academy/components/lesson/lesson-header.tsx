interface LessonHeaderProps {
    title: string,
    description: string
}

export default function LessonHeader(
    {
        title,
        description
    }: LessonHeaderProps
) {
    return (
        <div className="space-y-2">
            <h1 className="text-4xl font-bold">
                {title}
            </h1>
            <p className="text-gray-500">
                {description}
            </p>
        </div>
    )
}