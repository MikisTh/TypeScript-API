import Food from '../models/food'
import database from './database'

const foodsRepository = {
    criar: (food: Food, callback: (id?: number) => void) => {
        const sql = 'INSERT INTO foods (nome, descricao) VALUES (?, ?)'
        const params = [food.nome, food.descricao]
        database.run(sql, params, function(_err) {
            callback(this?.lastID)
        })
    },
    lerTodos: (callback: (foods: Food[]) => void) => {
        const sql = 'SELECT * FROM foods'
        const params: any[] = []
        database.all(sql, params, (_err, rows) => callback(rows))
        
    },
    ler: (id: number, callback: (food?: Food) => void) => {
        const sql = 'SELECT * FROM foods WHERE id = ?'
        const params = [id]
        database.get(sql, params, (_err, row) => callback(row))
    },
    atualizar: (id: number, food: Food, callback: (notFound: boolean) => void) => {
        const sql = 'UPDATE foods SET nome = ?, descricao = ? WHERE id = ?'
        const params = [food.nome, food.descricao, id]
        database.run(sql, params, function(_err) {
            callback(this.changes === 0)
        })
    },
    apagar: (id: number, callback: (notFound: boolean) => void) => {
        const sql = 'DELETE FROM foods WHERE id = ?'
        const params = [id]
        database.run(sql, params, function(_err) {
            callback(this.changes === 0)
        })
    },
}
export default foodsRepository