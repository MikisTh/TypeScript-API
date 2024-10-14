import express from 'express'
import Food from '../models/food'
import foodsRepository from '../repositories/foods-repository'

const foodsRouter = express.Router()
foodsRouter.post('/foods', (req, res) => {    
        const food: Food = req.body        
        const id = 123
        res.status(201).location(`/foods/${id}`).send()
    })

foodsRouter.post('/foods', (req, res) => {
    const food: Food = req.body
        foodsRepository.criar(food, (id) => {
            if (id) {
                res.status(201).location(`/foods/${id}`).send()
            } else {
                res.status(400).send()
            }
        })
    })

foodsRouter.get('/foods', (req, res) => {
    foodsRepository.lerTodos((foods) => res.json(foods))
})

foodsRouter.get('/foods/:id', (req, res) => {
    const id: number = +req.params.id
    foodsRepository.ler(id, (food) => {
        
        if (food) {
            res.json(food)
        } else {
            res.status(404).send()
        }
    })
})

foodsRouter.put('/foods/:id', (req, res) => {   
        const id: number = +req.params.id
        foodsRepository.atualizar(id, req.body, (notFound) => {
            if (notFound) {
                res.status(404).send()
            } else {
                res.status(204).send()
            }
        })      
        res.send(`Atualiza o alimento ${id}`)
})

foodsRouter.delete('/foods/:id', (req, res) => {
    const id: number = +req.params.id
    foodsRepository.apagar(id, (notFound) => {
        if (notFound) {
            res.status(404).send()
        } else {
            res.status(204).send()
        }
    })   
})



foodsRouter.get('/foods', (req, res) => {
    const foods: Food[] = [
        {
            id: 1,
            nome: 'Alimento 1',
            descricao: 'Descrição do alimento 1'
        },
        {
            id: 2,
            nome: 'Alimento 2',
            descricao: 'Descrição do alimento 2'
        }
    ]
    res.json(foods)
})

export default foodsRouter