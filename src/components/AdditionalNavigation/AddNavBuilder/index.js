import React, { Component } from "react";
import Loading from "../../Loading";
import CivilizationNavBuilder from "./CivilizationNavBuilder";
import UnitNavBuilder from "./UnitNavBuilder";
import StructureNavBuilder from "./StructureNavBuilder";
import TechnologyNavBuilder from "./TechnologyNavBuilder";

class AddNavBuilder extends Component {
  state = {
    flag: true,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.setState({
        flag: !prevProps.flag,
      });
    }
  }

  render() {
    const {
      name,
      expansion,
      age,
      description,
      cost,
      build_time,
      hit_points,
      line_of_sight,
      armor,
    } = this.props.data;

    return (
      <>
        {this.state.flag ? (
          <div>
            {Boolean(this.props.data) && (
              <>
                {name && (
                  <h1>
                    <span>More info about </span>
                    {name}
                  </h1>
                )}

                {expansion && (
                  <p>
                    <span>Expansion: </span>
                    {expansion}
                  </p>
                )}

                {age && (
                  <p>
                    <span>Age: </span>
                    {age}
                  </p>
                )}

                {description && (
                  <p>
                    <span>Description: </span>
                    {description}
                  </p>
                )}

                {cost && (
                  <div>
                    <p>Cost:</p>
                    <ul>
                      {cost.Wood && (
                        <li>
                          <span>Wood - </span>
                          {cost.Wood}
                        </li>
                      )}
                      {cost.Gold && (
                        <li>
                          <span>Gold - </span>
                          {cost.Gold}
                        </li>
                      )}
                    </ul>
                  </div>
                )}

                {build_time && (
                  <p>
                    <span>Build time - </span>
                    {build_time}
                  </p>
                )}

                {line_of_sight && (
                  <p>
                    <span>Line of sight rate - </span>
                    {line_of_sight}
                  </p>
                )}

                {hit_points && (
                  <p>
                    <span>Hit points - </span>
                    {hit_points}
                  </p>
                )}

                {armor && (
                  <p>
                    <span>Armor - </span>
                    {armor}
                  </p>
                )}

                <CivilizationNavBuilder data={this.props.data} />
                <UnitNavBuilder data={this.props.data} />
                <StructureNavBuilder data={this.props.data} />
                <TechnologyNavBuilder data={this.props.data} />
              </>
            )}

            {Boolean(this.props.data.length) && (
              <>
                {this.props.data.map((item, index) => (
                  <div key={index}>
                    {item.name && (
                      <h1>
                        <span>More info about </span>
                        {item.name}
                      </h1>
                    )}

                    {item.expansion && (
                      <p>
                        <span>Expansion: </span>
                        {item.expansion}
                      </p>
                    )}

                    {item.age && (
                      <p>
                        <span>Age: </span>
                        {item.age}
                      </p>
                    )}

                    {item.cost && (
                      <div>
                        <p>Cost:</p>
                        <ul>
                          {item.cost.Wood && (
                            <li>
                              <span>Wood - </span>
                              {item.cost.Wood}
                            </li>
                          )}
                          {item.cost.Gold && (
                            <li>
                              <span>Gold - </span>
                              {item.cost.Gold}
                            </li>
                          )}
                        </ul>
                      </div>
                    )}

                    {item.build_time && (
                      <p>
                        <span>Build time - </span>
                        {item.build_time}
                      </p>
                    )}

                    {item.line_of_sight && (
                      <p>
                        <span>Line of sight rate - </span>
                        {item.line_of_sight}
                      </p>
                    )}

                    {item.hit_points && (
                      <p>
                        <span>Hit points - </span>
                        {item.hit_points}
                      </p>
                    )}

                    {item.armor && (
                      <p>
                        <span>Armor - </span>
                        {item.armor}
                      </p>
                    )}

                    <StructureNavBuilder data={item} />
                  </div>
                ))}
              </>
            )}
          </div>
        ) : (
          <Loading />
        )}
      </>
    );
  }
}

export default AddNavBuilder;
