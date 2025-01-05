import React, {useEffect} from 'react';
import ContactStore from "../../../store/ContactStore.js";

const InboxComponents = () => {

    const {messageList, getMessage}=ContactStore();
    useEffect(()=>{
        (async ()=>{
            await getMessage();
        })()
    },[messageList]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2>All messages</h2>
                    <hr/>
                    <table className={"table table-striped w-100"}>
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Subject</th>
                            <th>Message</th>
                            <th>CreatedAt</th>
                            <th>UpdatedAt</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            messageList?.map((item, i)=>{
                                return (
                                    <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.mobile}</td>
                                        <td>{item.subject}</td>
                                        <td>{item.message}</td>
                                        <td>{item.createdAt}</td>
                                        <td>{item.updatedAt}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default InboxComponents;