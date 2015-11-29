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
    p = 82793
    g = 32767
    a = 1541
    b = 1000;
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
    gb = 52044
    ga = power(g,a,p)
    print("ga={0}".format(ga))
    gb = power(g,b,p)
    print("gb={0}".format(gb))
    gab = power(gb,a,p)
    print("gab={0}".format(gab))
    print("加密前的字段是:")
    print(gab^27117)
main()
