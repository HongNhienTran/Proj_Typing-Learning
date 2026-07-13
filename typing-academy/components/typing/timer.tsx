interface Props {

    seconds: number;
}

export default function Timer({

    seconds,

}: Props) {

    const minute =
        Math.floor(seconds / 60);

    const second =
        seconds % 60;

    return (

        <div className="rounded-xl border p-4">

            <p className="text-sm text-gray-500">

                Timer

            </p>

            <h2 className="mt-2 text-2xl font-bold">

                {minute
                    .toString()
                    .padStart(2, "0")}

                :

                {second
                    .toString()
                    .padStart(2, "0")}

            </h2>

        </div>

    );
}