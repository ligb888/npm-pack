export TGZ=tgz
export LIST=../list.txt
if [ ! -d $TGZ ]; then
  mkdir $TGZ
fi
cd $TGZ
cat $LIST | while read line
do
    echo $line
done