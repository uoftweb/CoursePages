
# checkout to the gh-pages branch
git checkout gh-pages

# get the latest version of the docs
git checkout origin/master -- docs
mv docs/* .
rm -rf docs 

# add all files
git add .

# commit
git commit -a -m "Update docs"

# push to the origin
git push origin gh-pages

# go back to previous branch
git checkout - 
