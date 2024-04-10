module.exports = async function (context, req) {
    const cars = require('./cars.json');
    if (req.method == "GET")
    {
        context.res.json(cars);
    }
    else if (req.method == "DELETE")
    {
        const id = req.params.id;
        const index = cars.findIndex(car => car.id === id);
        cars.splice(index, 1);
        context.res.json({ message: `Car with id ${id} deleted` });
    }
    else if (req.method == "POST")
    {
        console.log(req);
        const newCar = req.body;
        const lastCar = cars[cars.length-1];
        const id = parseInt(lastCar["id"])+1;
        newCar["id"] = id.toString();
        console.log(newCar);
        cars.push(newCar);
        context.res.json(newCar);
    }
}