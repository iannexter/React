
export const UserRow = (user) =>{

return(


                        <tr key={user.id}>

                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button type="button"
                                    className="btn btn-secondary btn-sm"
                                >
                                    atualizar
                                </button></td>
                            <td>

                                <button type="button"
                                    className="btn btn-danger btn-sm"
                                >
                                    remover
                                </button>

                            </td>

                        </tr>



)


    
}