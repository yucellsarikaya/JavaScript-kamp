import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"
import Customer from '../models/customer.js'

console.log("User component yüklendi")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1, "Yücel", "Sarıkaya", "Ankara")
let user2 = new User(2, "Özlem", "Sarıkaya", "Muğla")
//userService.add(user1)
//userService.add(user2)
console.log("==================================================")
console.log(userService.listCustomers())
console.log("==================================================")
console.log(userService.getCustomerById(2))
console.log("==================================================")



let customer = { id: 2, firstName: "Yücel" }

//prototyping
customer.lastName = "Sarıkaya"
console.log(customer.lastName)

console.log("==================================================")
userService.load()
let customerToAdd = new Customer(6, "Melis", "Kıraç", "Sinop", "sasdsa")
customerToAdd.type = "customer"
userService.add(customerToAdd)
console.log("Customer: ", userService.customers)
console.log("Employee: ", userService.employees)
console.log("Erros: ", userService.errors)
console.log(userService.getCustomerSorted())