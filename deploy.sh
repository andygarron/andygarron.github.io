git checkout source
COMMIT_SHA="$(git rev-parse HEAD)"
yarn build
git checkout master
# git add build
echo "Deploy ${COMMIT_SHA}"
# git commit -m "Deploy ${COMMIT_SHA}"
# git push
git checkout source
