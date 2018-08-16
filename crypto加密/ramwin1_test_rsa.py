def power(y,d,n):
    if d>=2:
        x = power(y,d/2,n)
        if d%2:
            return (x*x*y)%n
        else:
            return (x*x)%n
    return (y**d)%n
def main():
    p = 101
    g = 61
    a = 45
    b = 31
    gb = g**b

    print(secret)
    print(e*d%(pk-p-q+1))
    print(power(secret,d,pk-q-p+1))
main()
