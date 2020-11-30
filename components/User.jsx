export default function User({ user }) {
    return (
        <div>
            <p>{user.first_name}</p>
            <p>{user.last_name}</p>
        </div>
    )
}