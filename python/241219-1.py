import numpy

# [ 2  3  5  7  9 12 15 18 22 23]
array1 = numpy.array([2,3,5,7,9,12,15,18,22,23])
print(array1)

# [7 7 7 7 7 7]
array1 = numpy.full(6,7)
print(array1)

# [0 0 0 0 0 0]

# [0 0 0 0 0 0]
array1 = numpy.full(6,0)
array2 = numpy.zeros(6, dtype=int)

print(array1)
print()
print(array2)

# [1 1 1 1 1 1]

# [1 1 1 1 1 1]
array1 = numpy.full(6,1)
array2 = numpy.ones(6, dtype=int)

print(array1)
print()
print(array2)

# [0.65055229 0.54745206 0.54525867 0.28909441 0.03282668 0.54307323]

# [0.26042191 0.92424371 0.81307718 0.48805033 0.50719152 0.83910372]
array1 = numpy.random.random(6)
array2 = numpy.random.random(6)

print(array1)
print()
print(array2)

# [0 1 2 3 4 5]
array1 = numpy.arange(6)
print(array1)

# [2 3 4 5 6]
array1 = numpy.arange(2,7)
print(array1)

# [3 5 7]
array1 = numpy.arange(3,8,2)
print(array1)