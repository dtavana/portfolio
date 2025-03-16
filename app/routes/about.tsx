import ProfilePicture from "~/components/ProfilePicture"

export default function About() {
    return (
        <div className="flex flex-col items-center justify-center">
            <ProfilePicture />
            <div className="text-center mt-10">
                My name is
                <span className="font-bold text-purple-500"> Darian Tavana </span>
                and welcome to my website.
            </div>
        </div>

    )
}