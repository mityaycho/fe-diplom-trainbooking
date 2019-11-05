import React, {Fragment} from 'react';
import CreatableSelect from 'react-select/creatable';

const CreatableSingle = ({title, setValue, register, filter, name, errors, t,
													 dataCities, options, setSearchItem}, props) => {
	const [values, setReactSelect] = React.useState({
		selectedOption: ''
	});

	const handleMultiChange = selectedOption => {
		// setValue(name, selectedOption ? selectedOption.value : '');
		setReactSelect({selectedOption});
	};
console.log(props)
	// React.useEffect(() => {
	// 	register({name: name});
	// }, []);
	return (
		<Fragment>
			<div className="form-group support__form-group">
				{/*<p className="form-group__label"> {title}<span className="text-danger">*</span></p>*/}
				<CreatableSelect
					isClearable
					value={props.value}
					onChange={setSearchItem}
					options={options}
					// value={values.selectedOption}
					// options={filter[name]}
					// onChange={handleMultiChange}
					// placeholder = {errors[name] && <span className="text-danger">{t('errors.isRequired')}</span>}
				/>
			</div>
		</Fragment>
	);
}

export default CreatableSingle;