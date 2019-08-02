// import React from 'react';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MyMenu from '../components/common/MyMenu'

import { getPosts } from '../modules/post';

class Posts extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="main Posts">
				<MyMenu />
				<div className="content">
          <ul className="postList">
            {this.props.posts.map((post, index) => {
              return (
                <li key={index} className="flex-r flex-s-b postItem">
                  <img src={post.thumbnailurl} alt={post.title} />
                  <aside className="flexItem">
                    <h3>{post.title}</h3>
                    <div className="postMeta">
                      <span>{post.authorName}</span>
                      <span>{post.datestr}</span>
                    </div>
                    <div className="postExcerpt" dangerouslySetInnerHTML={{__html: post.excerpt}}></div>
                  </aside>
                </li>
              )
            })}
          </ul>
          <div className="action">
            {this.props.isLoading && <img className="loadingImg" src="/img/loading.gif" alt="loading" />}
            <button className={'btn ' + (this.props.isLoading ? 'disabled' : '')} onClick={() => this.props.getPosts(this.props.page, this.props.per_page)} disabled={this.props.isLoading}>加载文章</button>
            <p className="desc">当前已加载文章数量: {this.props.posts.length}</p>
				  </div>
        </div>
			</div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.post.posts,
  page: state.post.page,
  per_page: state.post.per_page,
  isLoading: state.post.isLoading,
  hasMore: state.post.hasMore
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPosts
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
