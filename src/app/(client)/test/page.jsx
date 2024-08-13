import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, incrementByAmount} from '@/store/reduce/counterSlice';
import {get} from "@/helpers/api.js"
import {Button} from "antd";

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await get('/post');
                console.log('result', result);
                setData(result);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container my-10 mx-auto">
            <h1>redux toolkit</h1>
            <h1>{count}</h1>
            <button
                className="rounded-full bg-primary px-10 py-5 font-medium text-white transition-all hover:bg-primary-500"
                onClick={() => dispatch(increment())}>Increment
            </button>
            <button
                className="rounded-full bg-primary px-10 py-5 font-medium text-white transition-all hover:bg-primary-500"
                onClick={() => dispatch(decrement())}>Decrement
            </button>
            <button
                className="rounded-full bg-primary px-10 py-5 font-medium text-white transition-all hover:bg-primary-500"
                onClick={() => dispatch(incrementByAmount(5))}>Increment by 5
            </button>

            <div className="mt-10">
                <h1>Call api demo</h1>
                {
                    data?.map((e) => {
                        return(
                            <div>
                                {e.name}
                            </div>
                        )
                    })
                }
            </div>

            <div className="mt-10">
                <Button type="primary">button antd</Button>
            </div>


        </div>
    );
};

export default Counter;
