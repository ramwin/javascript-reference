ls -1 | grep 2016 | while read fn; do
    name=$fn
    left=0
    right=${#name}-5
    newname=${name:2:right};
    mv $name $newname
done
