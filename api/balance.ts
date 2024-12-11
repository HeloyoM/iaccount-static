import { LOCAL_DEV as baseUrl } from './base-url'
import { GET, POST, PUT } from "./api-req"
import CreateOutcome from '@/dto/createOutcome.dto';

const API = `balance`

export const addOutcome = async (createOutcome: CreateOutcome) => {
    try {
        console.log(`${baseUrl}/${API}`, createOutcome)
        return fetch(`${baseUrl}/${API}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount: createOutcome.amount,
                currency: createOutcome.currency,
                source: createOutcome.source,
            })
        })
            .then(response => response.json())
            .then(json => {
                console.log({ json })
                return json;
            })
            .catch(error => {
                console.log(error);
            });
    } catch (error) {
        throw new Error('')
    }
}