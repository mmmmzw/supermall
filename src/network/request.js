import axios from 'axios'

export function request(config){
	const instance = axios.create({
		baseURL: 'http://152.136.185.210:8000/api/w6',
		// baseURL: 'http://123.207.32.32:8000',
		timeout: 5000
	})
	return instance(config)
}