module.exports = {
    getHouses: (req, res) => {
        const db = req.app.get('db');
        db.get_houses().then(response => {
            res.status(200).send(response);
        }).catch(err =>{
            console.log('getHouses:',err)
        })
    },
    addHouse: (req, res) => {
        const {name, address, city, state, zipcode, img, mortgage, rent} = req.body;
        const db = req.app.get('db');

        db.add_house([name, address, city, state, zipcode, img, mortgage, rent]).then(res => {
            res.status(200).send('Added House')
        }).catch(err => {
            res.status(500).send({ message: 'errored!' });
            console.log('addHouse:', err);
        })
    },
    deleteHouse: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;

        db.delete_house([id]).then(response => {
            res.status(200).send('house is deleted');
        }).catch(err => {
            console.log('deleteHouse:', err);
        })
    }
}