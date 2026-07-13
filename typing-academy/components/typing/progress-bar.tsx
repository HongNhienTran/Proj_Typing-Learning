interface Props {

    current: number;

    total: number;
}

export default function ProgressBar({

    current,

    total,

}: Props) {

    const percentage =
        (current / total) * 100;

    return (

        <div>

            <div className="mb-2 flex justify-between text-sm">

                <span>

                    Progress

                </span>

                <span>

                    {current}/{total}

                </span>

            </div>

            <div className="h-3 rounded-full bg-gray-200">

                <div
                    className="h-full rounded-full bg-black transition-all"
                    style={{
                        width: `${percentage}%`,
                    }}
                />

            </div>

        </div>

    );
}