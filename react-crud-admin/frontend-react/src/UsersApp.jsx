import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";


export const UsersApp = () => {

    const initialUsers = [

        {
            id: 1,
            name: 'joão',
            password: '12345',
            email: 'joao@gmail.com'
        },

        {
            id: 2,
            name: 'maria',
            password: '123',
            email: 'maria@gmail.com'
        }
    ];

    return (

        <div className="container my-4">

            <h2>Users App</h2>

            <div className="row">


                <div className="col">
                    <UserForm />

                </div>

                <div className="col">

                    <UsersList users={initialUsers} />

                </div>


            </div>

        </div>
    );

}