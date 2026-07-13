interface Props {

    character: string;

    status:

        | "pending"

        | "correct"

        | "incorrect";
}

export default function Character({

    character,

    status,

}: Props) {

    const color = {

        pending: "text-gray-400",

        correct: "text-green-600",

        incorrect: "text-red-500",
    };

    return (

        <span className={color[status]}>

            {character}

        </span>

    );
}