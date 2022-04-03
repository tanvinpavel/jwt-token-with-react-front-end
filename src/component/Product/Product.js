import React, { useState } from 'react';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

const Product = () => {

    const axiosPrivate = useAxiosPrivate();
    const [message, setMessage] = useState('');

    const deleteHandler = async (id) => {
        try {
            const response = await axiosPrivate.delete(`/api/delete/${id}`);

            if(response){
                setMessage(response.data);
            }else{
                setMessage('SomeThing want wrong');
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='page-body'>
            <div>
                <h1>this is Product page</h1>
                <button onClick={()=>deleteHandler(1)}>delete use 1</button>
                <button onClick={()=>deleteHandler(2)}>delete use 2</button>
                {
                    message && <p onClick={()=>setMessage('')}>{ message }</p>
                }
            </div>
        </div>
    );
};

export default Product;