// script.js
// Intersection Observerを使用して、要素がビューポートに入ったときにフェードインアニメーションを適用します。

// フェードインアニメーションを適用するターゲット要素を取得
const target = document.querySelectorAll('.js-fadein');

// Intersection Observerのオプションを設定
const options = {
  root: null, // ビューポートをルートに設定
  rootMargin: '0px', // ルートマージンを設定
  threshold: 0.3 // 30%がビューポートに入ったときにコールバックを実行
};

// Intersection Observerのインスタンスを作成
const observer = new IntersectionObserver((entries, observer) => {
  // 各エントリをループ処理
  entries.forEach(entry => {
    // エントリがビューポートに入った場合
    if (entry.isIntersecting) {
      // ターゲット要素に'is-show'クラスを追加
      entry.target.classList.add('is-show');
    }
  });
}, options);

// 各ターゲット要素を監視
target.forEach((t) => {
  observer.observe(t);
});
