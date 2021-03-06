options( digits = 16 )
library( jsonlite )
library( FAdist )

mu = 200
beta = 100
x = seq( -1000, 1000, 0.5 )
y = dgumbel( x, beta, mu )

cat( y, sep = ",\n" )

data = list(
	mu = mu,
	beta = beta,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/accessor.json" )
