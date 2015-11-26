# -*- coding:utf-8 -*-
def power(y,d,n):
    if d>=2:
        x = power(y,d/2,n)
        if d%2:
            return (x*x*y)%n
        else:
            return (x*x)%n
    else:
        return y%n
    return (y**d)%n
def main():
    p = 997
    g = 500
    a = 300
    # ga = power(g,a,p)
    # b = 55555
    # message = 24929
    # gab = power(ga,b,p)
    # gb = power(g,b,p)
    # crypto_text = message^gab
    # gba = power(gb,a,p)
    # decrypto_text = crypto_text^gba
    # gba = power(gb,a,p)
    # decrypto_text = crypto_text^gba
    print power(g,a,p)
main()
