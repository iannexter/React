import { UserRow } from "./UsersRow"


export const UsersList = ({ users = [] }) => {

    return (
        <table className="table table-hoover table-striped">


            <thead>

                <tr>
                    <th>#</th>
                    <th>username</th>
                    <th>email</th>
                    <th>update</th>
                    <th>remove</th>

                </tr>

            </thead>

            <tbody>
                {

                    users.map(user => (
                        <UserRow
                            key={user.id}
                            id={user.id}
                            username={user.name}
                            email={user.email} />
                    ))
                }

            </tbody>

        </table>

    )


}