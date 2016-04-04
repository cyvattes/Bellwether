#SEED TEST USER
User.create(username: 'kieunta', email: 'cy.vattes@gmail.com', password: '1234')

#SEED CALTRAIN STATIONS
#Zone 1
Station.create(name: 'San Francisco', zone: 1, latitude: 37.77666, longitude: -122.39470)
Station.create(name: '22nd Street', zone: 1, latitude: 37.75752, longitude: -122.39268)
Station.create(name: 'Bayshore', zone: 1, latitude: 37.70971, longitude: -122.40137)
Station.create(name: 'South San Francisco', zone: 1, latitude: 37.65756, longitude: -122.40555)
Station.create(name: 'San Bruno', zone: 1, latitude: 37.63237, longitude: -122.41238)
#Zone 2
Station.create(name: 'Millbrae', zone: 2, latitude: 37.59912, longitude: -122.38667)
Station.create(name: 'Broadway (Weekend Only)', zone: 2, latitude: 37.58756, longitude: -122.36293)
Station.create(name: 'Burlingame', zone: 2, latitude: 37.57951, longitude: -122.34492)
Station.create(name: 'San Mateo', zone: 2, latitude: 37.56805, longitude: -122.32400)
Station.create(name: 'Hayward Park', zone: 2, latitude: 37.55512, longitude: -122.30820)
Station.create(name: 'Hillsdale', zone: 2, latitude: 37.53812, longitude: -122.29802)
Station.create(name: 'Belmont', zone: 2, latitude: 37.52407, longitude: -122.28082)
Station.create(name: 'San Carlos', zone: 2, latitude: 37.50756, longitude: -122.26000)
Station.create(name: 'Redwood City', zone: 2, latitude: 37.48542, longitude: -122.23191)
#Zone 3
Station.create(name: 'Atherton (Weekend Only)', zone: 3, latitude: 37.46322, longitude: -122.19646)
Station.create(name: 'Menlo Park', zone: 3, latitude: 37.45457, longitude: -122.18245)
Station.create(name: 'Palo Alto', zone: 3, latitude: 37.44342, longitude: -122.16517)
Station.create(name: 'Stanford (Football Only)', zone: 3, latitude: 37.43844, longitude: -122.15554)
Station.create(name: 'California Ave.', zone: 3, latitude: 37.42855, longitude: -122.14278)
Station.create(name: 'San Antonio', zone: 3, latitude: 37.40720, longitude: -122.10716)
Station.create(name: 'Mountain View', zone: 3, latitude: 37.39377, longitude: -122.07664)
Station.create(name: 'Sunnyvale', zone: 3, latitude: 37.37803, longitude: -122.03036)
#Zone 4
Station.create(name: 'Lawrence', zone: 4, latitude: 37.37155, longitude: -121.99696)
Station.create(name: 'Santa Clara', zone: 4, latitude: 37.35325, longitude: -121.93651)
Station.create(name: 'College Park', zone: 4, latitude: 37.34166, longitude: -121.91449)
Station.create(name: 'San Jose Diridon', zone: 4, latitude: 37.32990, longitude: -121.90246)
Station.create(name: 'Tamien (SJ to Gilroy Only)', zone: 4, latitude: 37.31172, longitude: -121.88256)
#Zone 5
Station.create(name: 'Capitol (SJ to Gilroy Only)', zone: 5, latitude: 37.28382, longitude: -121.84104)
Station.create(name: 'Blossom Hill (SJ to Gilroy Only)', zone: 5, latitude: 37.25299, longitude: -121.79759)
#Zone 6
Station.create(name: 'Morgan Hill (SJ to Gilroy Only)', zone: 6, latitude: 37.12916, longitude: -121.65029)
Station.create(name: 'San Martin (SJ to Gilroy Only)', zone: 5, latitude: 37.08565, longitude: -121.61083)
Station.create(name: 'Gilroy (SJ to Gilroy Only)', zone: 5, latitude: 37.00364, longitude: -121.56715)

