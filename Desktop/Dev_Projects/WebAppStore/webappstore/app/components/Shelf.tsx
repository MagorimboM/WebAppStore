"use client"
import react, { useEffect, useState } from 'react'
import React from 'react'
import supabase from '../config/supabaseClient'
import useShareState from "../typescript/useSharedState"


const Products = () => {

    const submitForm = async (event: any) => {

        event.preventDefault();

        const formdata = new FormData(event.target);
        const email = formdata.get('email');
        const address = formdata.get('address');
        const postalCode = formdata.get('postalCode');
        const stateOrProvince = formdata.get('stateOrProvince');

        console.log(email, address, postalCode, stateOrProvince);

        // fetch product list from database
        const results = await supabase.from('customerDetails').insert({

            email: email, address: address, postalCode: postalCode,
            stateOrProvince: stateOrProvince

        }).select();

        // destructure response. 
        const { data, error } = results
        //if the json response has error data let me know
        if (error) {
            console.log('there is an error', error)
        }
        //if the json data and no error has data let me know
        if (data) {
            console.log('there is no error at all! ', data)
            // reset form fields if there is no issue. 
            event.target.reset();
        };
    };

    // 

    const [products, setProducts] = useState<any>();
    const [fetchError, setError] = useState<any>();
    const [cart, setCart] = useState<any>([])
    const {sharedState, updateSharedState } = useShareState();


    function addTocart(item: any) {
        setCart([item,...cart])
        console.log('new item collected', cart)

        if (cart.length>0 && cart!== undefined) {
            try {
                updateSharedState(cart)
                console.log("updated global cart", sharedState )

            } catch (error) {
                console.log("could not add new item to cart", error)
            }
            
        }
       
    }
    const deleteFromCart = (itemToDelete: any) => {

        const newCart = cart.filter((item: any) => item !== itemToDelete);

    }

    useEffect(() => {
        const fetchData = async () => {

            const { data, error } = await supabase.from('products').select()
            // console.log(data); 

            if (error) {
                setError(error);
                setProducts(null);
            }

            if (data) {
                setProducts(data);
                setError(null);
            }
        };
        fetchData();
    }, []);

    const form = [
        { label: 'Email', type: 'email', name: 'email', id: 'email', htmlFor: 'email', minimum: 1, maximum: 100 },
        { label: 'Name on card', type: 'text', name: 'nameOnCard', id: 'nameOnCard', htmlFor: 'nameOnCard', minimum: 2, maximum: 50 },
        { label: 'Card number', type: 'number', name: 'cardNumber', id: 'cardNumber', htmlFor: 'cardNumber', minimum: 2, maximum: 50 },
        { label: 'Adress', type: 'text', name: 'address', id: 'address', htmlFor: 'address', minimum: 1, maximum: 100 },
    ]
    const formTwo = [

        { label: 'CVC', type: 'number', name: 'CVC', id: 'CVC', htmlFor: 'CVC', minimum: 3, maximum: 6 },
        { label: 'ExpiryDate', type: 'number', name: 'ExpiryDate', id: 'ExpiryDate', htmlFor: 'ExpiryDate', minimum: 4, maximum: 10 },

    ];

    return (<>



        <div className='flex overflow-scroll sm:h-2/3 border-4 border-amber-400 h-screen w-screen rounded-lg text-white gap-x-1
            grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 place-items-center z-[0] m-1 w-screen h-screen p-5
            '>
            {fetchError ? <p>{fetchError}</p> : null}
            {products ? products.map((product: any) => (
                <div key={product.id} className='card h-96 w-96 shadow-xl bg-white text-black rounded-lg'>
                    <figure><img className='rounded-md' src={product.image} alt="DRNS" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{product.title} </h2>
                        <p>{product.description} </p>
                        <div className="card-actions justify-end">
                            <div className="card-actions justify-end">
                                <button onClick={ ()=>(addTocart(product))} className="btn btn-primary">Buy Now | ${product.price }</button>
                            </div>
                        </div>
                    </div>
                </div>
            )) : null}

        </div>
    </>

    )
}

export default Products; 