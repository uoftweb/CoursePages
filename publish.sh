
# checkout to the gh-pages branch
git checkout gh-pages

# get the latest version of the docs
git checkout master -- docs

# build the book
gitbook build

# copy the static site files into the current directory.
cp -R _book/* .

# remove 'node_modules' and '_book' directory
git clean -fx node_modules
git clean -fx _book

# add all files
git add .

# commit
git commit -a -m "Update docs"

# push to the origin
git push origin gh-pages

# checkout to the master branch
git checkout master
