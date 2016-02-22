import {Component} from "angular2/core"
import {NgModel} from "angular2/common"
import {bootstrap} from "angular2/platform/browser"

@Component({
    selector: "reddit-article",
    host: {
        class: "row"
    },
    template:
    `
<div class="four wide column center aligned votes">
    <div class="ui statistic">
        <div class="value">
        <span [ngModel]="votes"></span>
        </div>
            <div class="label">
                Points
            </div>
        </div>
    </div>
    <div class="twelve wide column">
        <a class="ui large header" href="{{ link }}">
        {{ title }}
        </a>
        <ul class="ui big horizontal list voters">
            <li class="item">
               <a href (click)="voteUp()"><i class="arrow up icon"></i>
                 upvote
               </a>
            </li>
            <li class="item">
                <a href (click)="voteDown()"><i class="arrow down icon"></i>
                    downvote
                </a>
            </li>
        </ul>
    </div>
    `
})
class ArticleComponent {
    votes: number;
    title: string;
    link: string;

    constructor() {
        this.title = "Angular 2";
        this.link = "www.angular2.io";
        this.votes = 8;
    }

    voteUp(): boolean {
        this.votes = this.votes + 1;
        console.log(`voteUp(): ${this.votes}`);
        return false;
    }
    voteDown(): boolean {
        this.votes = this.votes - 1;
        console.log(`voteDown(): ${this.votes}`);
        return false;
    }
}


@Component({
    selector: "reddit",
    directives: [ArticleComponent],
    template:
    `
        <form class="ui large form segment">
            <h3 class="ui header">Add a Link</h3>
            <div class="field">
                <label for="title">Title:</label>
                    <input name="title" #newTitle>
            </div>
            <div class="field">
                <label for="link">Link:</label>
                    <input name="link" #newLink>
            </div>
            <button (click)="addArticle(newTitle, newLink)" class="ui positive right floated button">
                Add Article
            </button>
         </form>

        <div class="ui grid posts">
            <reddit-article></reddit-article>
        </div>
    `
})

class Reddit {
    constructor() {
    }

    addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
        console.log(`Posting Title: ${title.value}, ${link.value}`);
    }
}

bootstrap(Reddit);