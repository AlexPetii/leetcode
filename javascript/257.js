function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(
  1,
  new TreeNode(2, null, new TreeNode(5)),
  new TreeNode(3)
);

var binaryTreePaths = function (root) {
  let result = [];
  if (!root) return result;

  const dfs = (root, v, curr) => {
    curr.push(root.val);

    if (!root.left && !root.right) {
      v.push(curr.join("->"));
      return;
    }
    if (root.left) {
      dfs(root.left, v, curr);
      curr.pop();
    }
    if (root.right) {
      dfs(root.right, v, curr);
      curr.pop();
    }
  };

  dfs(root, result, []);
  return result;
};

console.log(binaryTreePaths(root));
