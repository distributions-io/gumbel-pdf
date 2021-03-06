options( digits = 16 )
library( jsonlite )
library( FAdist )

mu = -1
beta = 2
x = c( -5, -2.5, 0, 2.5, 5 )
y = dgumbel( x, beta, mu )

cat( y, sep = ",\n" )

data = list(
	mu = mu,
	beta = beta,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/number.json" )
