#SEED TEST USER
User.create(username: 'kieunta', email: 'cy.vattes@gmail.com', password: '1234')

#SEED CALTRAIN STATIONS
Station.create(name: 'San Francisco', zone: 1, latitude: 37.77666, longitude: -122.39470)
